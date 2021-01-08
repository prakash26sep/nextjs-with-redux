export const getMonth = (month:any) => {
    switch (month) {
        case '01': return "Jan";
        break;
        case '02': return "Feb";
        break;
        case '03': return "Mar";
        break;
        case '04': return "Apr";
        break;
        case '05': return "May";
        break;
        case '06': return "June";
        break;
        case '07': return "July";
        break;
        case '08': return "Aug";
        break;
        case '09': return "Sep";
        break;
        case '10': return "Oct";
        break;
        case '11': return "Nov";
        break;
        case '12': return "Dec";
        break;
        default: return ""

    }
  }
  export const hoverActive = (id1: any, id2: any) => {
    const inactive:any = document.querySelector(`#${id2}`)
    const active:any = document.querySelector(`#${id1}`)
    inactive.style.display = 'none'
    active.style.display = 'block'
  }
  export const hoverInactive = (id1: any, id2: any) => {
    const inactive:any = document.querySelector(`#${id2}`)
    const active:any = document.querySelector(`#${id1}`)
    active.style.display = 'none'
    inactive.style.display = 'block'
  }
  export const createDate = (createdAt:any) => {
    const currentDate:any = new Date().getDate()
    const currentHour = new Date().getHours()
    const currentMinute = new Date().getMinutes()
    const date = createdAt.split('-');
    const year = date[0];
    const month = getMonth(date[1])
    const day = date[2].split(' ')[0];
    const time = date[2].split(' ')[1].split(':');
    const hour = time[0]
    const minute = time[1]
    const second = time[2]
    console.log(time)
    if (day < currentDate) {
      return `${day} ${month} ${year}`;
    } else if(+day === currentDate) {
      console.log('date')
     if(+second < 59) {
       return `${second} seconds ago`
     } else if (+minute < 59) {
       return `${minute} minutes ago`
     }
    }
  }
  export const ReadCookie = (cookiName:string) => {
    
    var allcookies = document.cookie;
    // document.write ("All Cookies : " + allcookies );
    // let name:any;
    let value:any 
    let cookiearray = allcookies.split(';');
    for(var i=0; i<cookiearray.length; i++) {
     let name = cookiearray[i].split('=')[0];
      if(name.trim() === cookiName){
      value = cookiearray[i].split('=')[1];
      break;
      }
    }
    return value
    // switch (cookiName){
    //   case "access_token":
    //   return(name);
    //     debugger
    //    case "id":
    //     return(value);
    //       debugger
    //       default:
    //       return;
    // }
   
 }

 export const deleteCookie = (name) => {
  var now = new Date();
  // now.setMonth( now.getMonth() - 1 );
  // let cookievalue = "" + ";"
  // document.cookie = "acces=" + cookievalue;
  document.cookie = name +`=;Path=/;Expires=${now}`
}