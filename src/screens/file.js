function timeConversion(s) {

    let timeArr = s.split(':');
    let result = timeArr[0];
    let PMorAM = timeArr[2].substring(2, timeArr[2].length);

    if (PMorAM === 'AM' && result === '12') {
        result = '00';
    }

    if (PMorAM === 'PM') {
        switch (timeArr[0].substring(0, 2)) {
            case '01' :
                result = '13';
                break;
            case '02' :
                result = '14';
                break;
            case '03' :
                result = '15';
                break;
            case '04' :
                result = '16';
                break;
            case '05' :
                result = '17';
                break;
            case '06' :
                result = '18';
                break;
            case '07' :
                result = '19';
                break;
            case '08' :
                result = '20';
                break;
            case '09' :
                result = '21';
                break;
            case '10' :
                result = '22';
                break;
            case '11' :
                result = '23';
                break;
            default:
                break;
        }
    }

    result = `${result}:${timeArr[1]}:${timeArr[2].substring(0, 2)}`;

    return result;
}

let s = '07:05:45PM'
timeConversion(s)
