import React from 'react'

// export default function Contact(props){
//     // console.log(props)
//     return(
//     <div className="contact-card">
//             <img src={ props.img } alt="cute kitty 1"/>
//             <h3>{ props.name }</h3>
//             <div className="info-group">
//                 <img src="images/phone.png" alt="phone" />
//                 <p>{ props.phone }</p>
//             </div>
//             <div className="info-group">
//                 <img src="images/Mail.png" alt="email"/>
//                 <p>{ props.email }</p>
//             </div>
//         </div>
//     )
//}

// destructuring
// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }
// const {img, name, phone} = person
// console.log(name, phone)


//Here is the component destructured
export default function Contact({img, name, phone, email}){
    // console.log(props)
    return(
    <div className="contact-card">
            <img src={ img } alt="cute kitty 1"/>
            <h3>{ name }</h3>
            <div className="info-group">
                <img src="images/phone.png" alt="phone" />
                <p>{ phone }</p>
            </div>
            <div className="info-group">
                <img src="images/Mail.png" alt="email"/>
                <p>{ email }</p>
            </div>
        </div> 
    )
}
