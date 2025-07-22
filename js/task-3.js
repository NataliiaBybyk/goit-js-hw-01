function getElementWidth(content, padding, border) {
  // Убираем 'px'и пеобазуем в число
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Вичислюємо загальну ширину.Загальна ширина елементу включає в себе content + (2 * padding) + (2 * border).
  // Помножуємо на 2, тому що відступи та бордери є з двух стоін зліва та спррава
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
