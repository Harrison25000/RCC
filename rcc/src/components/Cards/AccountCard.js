import { Button } from "../Button"
import { Image } from "../Image"

export const AccountCard = () => {
    return (
        <div className="AccountCard">
            <Image url="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg" />
            <div className="AccountInfo">
                <p>Oliver Harrison</p>
                <p>ofcharrison@gmail.com</p>
                <Button text="Edit Info" />
            </div>
        </div >
    )
}