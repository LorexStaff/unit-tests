import sortHeroesByHealth from '../src/sortHeroes';

describe('sortHeroesByHealth function', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(heroes)).toEqual([{ name: 'маг', health: 100 }]);
  });
});
