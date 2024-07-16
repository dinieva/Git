// Ошибка: Неиспользуемые переменные
let unusedVar;

// Ошибка: Не используется сокращенный синтаксис для определения объектов
const x = 1;
const obj = {x: x};

// Ошибка: Не используются фигурные скобки у if
if (true) console.log('No curly braces');

// Ошибка: Переопределение переменных
var a = 3;
var a = 10;

// Ошибка: Двойные кавычки у строк
const str = 'double quotes';

// Ошибка: Использовать const вместо let, если переменная никогда не изменяет значение
let c = 3;

// Ошибка: Использование == вместо ===
if (a == x) {
    console.log('Use strict equality');
}

// Ошибка: Недостижимый код
function unreachableCodeExample() {
    return;
    console.log('This code is unreachable');
}
