// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function CartItem(props) {
//     // const {id, img,title,body} =props.card
//     const {id, img,title,body}={
//       id:0,
//       title:'Air jodan',
//       img:'https://tse4.mm.bing.net/th?id=OIP.O7xhLouabk2CpjAS8V3sJgHaFP&pid=Api&P=0&h=180',
//       body:'Air jordan Best Seller'
//     }
//   return (
//     <Card style={{ width: '18rem', }} key={id}>
//       <Card.Img variant="top" src={img} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//          {body}
//         </Card.Text>
//         {/* <Button variant="primary">Add to card</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

// export default CartItem;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartItem(props) {
  const { id, img, title } = props.card;

  return (
    <Card style={{ width: '18rem' }} key={id}>
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={img} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '150px',
            textAlign: 'center',
            backgroundColor: 'white'
          }}
        >
          <Card.Title>{title}</Card.Title>

        </div>
      </div>
      <Card.Body style={{ textAlign: 'center' }}>
        {/* <Button variant="primary">Add to card</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CartItem;



