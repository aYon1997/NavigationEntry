const { NodeSSH } = require("node-ssh");
const path = require("path");
const config = require("../deploy.config.ts");
const serverConfig = config.server;
const Client = new NodeSSH();
const args = process.argv.slice(2)[0];

const ERROR_LEVEL = {
    'client-authentication': '密码错误',
    'client-timeout': '连接超时啦'
}

async function connectServer () {
    console.log('正在连接服务器...');

    await Client.connect({
        host: serverConfig.host,
        username: serverConfig.user,
        password: serverConfig.password,
        port: serverConfig.port
    });

    console.log('连接成功！');
}

async function deleteBackup () {
    console.log('正在删除老备份文件...');

    await Client.execCommand(`cd .. && rm -rf dist_bak`, {
        cwd: serverConfig.path
    });

    console.log('删除成功！');
}

async function makeBackup () {
    console.log('正在制作备份文件...');

    await Client.execCommand(`cd .. && cp -rf ${serverConfig.path} dist_bak`, {
        cwd: serverConfig.path
    });

    console.log('制作成功！');
}

async function recertBackup () {
    console.log('正在还原文件...');

    await Client.execCommand(
        `cd .. && rm -rf ${serverConfig.path} && mv dist_bak/ ${serverConfig.path}`,
        {
            cwd: serverConfig.path
        }
    );

    console.log('还原成功！');
}

async function uploadFile () {
    console.log('正在替换文件...');
    try {
        await connectServer ();
        await deleteBackup();
        await makeBackup();
        await Client.putDirectory(
            path.resolve(__dirname, `../${serverConfig.local}`),
            `${serverConfig.path}`,
            {
                recursive: true
            }
        )
        console.log('替换成功!');
        process.exit(0);
    } catch (err) {
        console.log('操作失败：', ERROR_LEVEL[err.level]);
        process.exit(1);
    }
}

async function revert () {
    try {
        await connectServer ();
        let res = await Client.execCommand(`cd .. && find dist_bak`, {
            cwd: serverConfig.path
        });
        if (res.stderr) {
            console.log('备份文件不存在，无法回滚！', res.stderr);
            process.exit(0);
        }

        await recertBackup();
        process.exit(0);
    } catch (err) {
        console.log('操作失败：', ERROR_LEVEL[err.level]);
        process.exit(1);
    }
}

function main() {
    if (args === 'upload') {
        uploadFile();
        return;
    }
    if(args === 'revert') {
        revert();
        return;
    }
}
main();