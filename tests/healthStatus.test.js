import getHealthStatus from '../src/healthStatus';

describe('getHealthStatus function', () => {
  test('should return healthy for health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return wounded for health between 15 and 50', () => {
    const character = { name: 'Лучник', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return critical for health < 15', () => {
    const character = { name: 'Мечник', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });
});
