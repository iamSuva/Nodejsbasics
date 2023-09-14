const student=["suvadip",'susmit','sujit','souvik'];
// console.log(student);
// module.exports=student; //only exporting single obj;
const age=[20,20,19];
module.exports={
    student,age
}
const os=require("os");
console.log(os.platform(),os.homedir());