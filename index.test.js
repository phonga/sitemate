const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles time after the 30 minutes not including 45 minutes', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });

  it('Handles time before the 30 minute mark without include 15 minutes', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });

  it('Handles midnight ranges', () => {
    const timeInWords = convertTimeToWords('23:55');
    expect(timeInWords).toBe('five to twelve');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles specific time without minutes', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });

  it('Handles times before 30 mins - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles 24 hour time', () => {
    const timeInWords = convertTimeToWords('14:15');
    expect(timeInWords).toBe('quarter past two');
  });
});
