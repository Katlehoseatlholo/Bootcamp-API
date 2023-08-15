 function wordLengths(str){
    const newArrayList=str.split(" ");
    let newStr="";
    for(let i=0;i<newArrayList.length;i++){
       newStr+=newArrayList[i]
    }
    console.log(newStr.length)
      return newStr.length;
  }

  export default wordLengths;