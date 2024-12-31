import Button from "./Button";
const Form = ({reqType,setReqType}) => {
    console.log(reqType,"reqType")
return (
    <form onSubmit={(e)=> e.preventDefault()}>
    <Button 
    buttonText ="users"
    reqType={reqType}
    setReqType={setReqType}
    />
    <Button
    buttonText ="posts"
    reqType={reqType}
    setReqType={setReqType}
    />
    <Button
    buttonText ="comments"
    reqType={reqType}
    setReqType={setReqType}    
    />
    </form>
 
)
}

export default Form;