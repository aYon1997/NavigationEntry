function fibonacciString(str: string) {
    // 定义斐波那契数列函数
    function fibonacci(n) {
      return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }
  
    let result = '';
    let i = 0;
    let fibIndex = fibonacci(i);
  
    // 当斐波那契数列的值小于字符串长度时，继续循环
    while (fibIndex < str.length) {
      result += str.charAt(fibIndex); // 获取对应下标的字符并拼接
      i++;
      fibIndex = fibonacci(i); // 获取下一个斐波那契数列的值
    }
  
    return result;
}

function reverseFibonacciString(fibStr) {
    // 定义斐波那契数列函数
    function fibonacci(n, memo = {}) {
      if (n in memo) return memo[n];
      if (n < 2) return n;
      return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
  
    // 生成随机字符
    function getRandomChar() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    // 计算斐波那契数列直到大于等于fibStr的长度
    let fibNumbers = [];
    let i = 0;
    let fibNum = fibonacci(i);
    while (fibNum <= fibStr.length) {
      fibNumbers.push(fibNum);
      fibNum = fibonacci(++i);
    }
  
    // 创建随机填充字符串
    let reconstructedStr = '';
    for (let i = 0, fibIndex = 0; i < fibNumbers[fibNumbers.length - 1]; i++) {
      if (i === fibNumbers[fibIndex]) {
        reconstructedStr += fibStr.charAt(fibIndex);
        fibIndex++;
      } else {
        reconstructedStr += getRandomChar();
      }
    }
  
    return reconstructedStr;
  }