

function sum(num) {
    const func = (num2) => num2 !== undefined ? sum(num + num2) : num;

    func.valueOf = () => num;
    return func;
} 

sum(5)(-1)(2) == 6