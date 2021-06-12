import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {

    let { name } = useParams();
  
    const [product, setProduct] = useState({});
  
    useEffect(()=>{
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data))
    },[])

    return (
        <div>
            <h3> SAMETAKCA.COM   </h3>
            <Card.Group>
    <Card fluid >
    <Image
    as='a'
    size='medium'
    href='https://sametakca.com/'
    target='_blank'
          floated='center'
          size='medium'
          src='https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/198829896_4375145475842380_2157121841299028431_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=Aj29Jcr16HgAX9_WFEc&_nc_ht=scontent-vie1-1.xx&oh=2d93c323880baef8350ff598f9736af6&oe=60C9C282'
        />
      <Card.Content>
        
        <Card.Header>  {product.productName}</Card.Header>
        <Card.Meta>  SMTcoder</Card.Meta>
        <Card.Description>
       
      
      <h1> Yazılım Geliştirici / Software developer   </h1> 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button  basic color='green'>
            Sepete Ekle
          </Button>
          <Button basic color='yellow'>
            Favori Ekle
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

  <Card.Group>
    <Card fluid color='red' header='Option 1' />
    <Card fluid color='orange' header='Option 2' />
    <Card fluid color='yellow' header='Option 3' />
  </Card.Group>

<Card.Group>
  <Card
      href='#card-example-link-card'
      header='Elliot Baker'
      meta='Friend'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
 <Card
      href='#card-example-link-card'
      header='Elliot Baker'
      meta='Friend'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
      
 </Card.Group>
     

     

        </div>
      );
    }