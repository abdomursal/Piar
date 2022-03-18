
const DateFormat =(date:string | undefined)=>{
    if(date){
      let formatDate = new Date(date)
      return `${formatDate.getDay()}/${formatDate.getMonth()}/${formatDate.getFullYear()}`
    }
    return 'Not Available'
  }

export default DateFormat