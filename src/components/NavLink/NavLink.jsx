export default function NavLink() {
  function handleClick(){
    console.log("click");
  }    

  return (
    <div onClick={handleClick}>NavLink</div>
  )
}