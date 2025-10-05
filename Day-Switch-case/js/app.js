let userDay = Number(prompt('روز مورد نظرت رو بنویس'));

function userDayFunction (userDay) {
    switch (userDay) {
        case 1 :
            alert('روز اول رو در هفته انتخاب کردی که میشه شنبه');
        break;

        case 2 :
            alert('روز دوم رو در هفته انتخاب کردی که میشه یک شنبه');
        break;

        case 3 :
            alert('روز سوم رو در هفته انتخاب کردی که میشه دو شنبه');
        break;

        case 4 :
            alert('روز چهارم رو در هفته انتخاب کری که میشه سه شنبه');
        break;

        case 5 :
            alert('روز پنجم رو در هفته انتخاب کردی که میشه چهار شنبه');
        break;

        case 6 :
            alert('روز ششم رو در هفته انتخاب کری که میشه پنج شنبه');
        break;

        case 7 :
            alert('روز هفتم یا روز آخر رو در هفته انتخاب کردی که میشه جمعه روز آخر هفته');
        break;

        default :
            alert('متاسفانه روز مورد نظر رو وارد نکردی یا اشتباه وارد کردی');
        break;
    }
}

userDayFunction(userDay);