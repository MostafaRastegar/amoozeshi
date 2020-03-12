const PanigaleEnNumber = (number)=>{
    let map = {
        // arabic 
        '٠': '0',
        '١‬': '1',
        '٢': '2',
        '٣': '3',
        '٤‬': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩‬': '9',
        // persian 
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
    };
    let numbers = number.split('');
    for (let i = 0; i < numbers.length; i++) {
        if (map.hasOwnProperty(numbers[i])) {
            numbers[i] = map[numbers[i]];
        }
    }
    return numbers.join('');
  }

export default PanigaleEnNumber;