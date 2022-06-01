import React from 'react'
import video from "../../Assets/mov_bbb.mp4"
import "./ourApp.styles.scss"
export default function Ourapp() {
    return (
        <div className='our-app'>
            <h1>Our Application</h1>
            <div className="flex-container">
                <div className="para">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci neque doloremque id ipsa beatae. Sit dolor, mollitia ipsa libero magnam ducimus excepturi accusamus id esse totam hic velit, ipsum iste.
                        Error corrupti maxime est sit saepe quaerat molestiae illum aspernatur, fugiat nulla soluta quo unde eum deserunt rem incidunt porro consequuntur optio dolores perferendis iste. Nihil ab praesentium labore animi.
                        Nihil, iste. Placeat, minima reiciendis eligendi quos asperiores labore tempora adipisci ducimus assumenda quibusdam nulla, illo voluptates ea voluptatem dolore rem doloribus dignissimos sit quae neque quia minus vel nam?
                    </p>
                </div>
                <video  controls> <source src={video} type="video/mp4"/> </video>
            </div>
        </div>
    )
}
