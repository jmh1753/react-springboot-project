import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import about from '../../images/about.jpg'
import author from '../../images/author.jpg'
import bg_1 from '../../images/bg_1.jpg'
import bg_2 from '../../images/bg_2.jpg'
import bg_3 from '../../images/bg_3.jpg'
import bg_4 from '../../images/bg_4.jpg'
import bg_5 from '../../images/bg_5.jpg'
import blog_1 from '../../images/blog-1.jpg'
import blog_2 from '../../images/blog-2.jpg'
import blog_3 from '../../images/blog-3.jpg'
import blog_4 from '../../images/blog-4.jpg'
import blog_5 from '../../images/blog-5.jpg'
import blog_6 from '../../images/blog-6.jpg'
import blog_7 from '../../images/blog-7.jpg'
import blog_8 from '../../images/blog-8.jpg'
import blog_9 from '../../images/blog-9.jpg'
import category_1 from '../../images/category-1.jpg'
import category_2 from '../../images/category-2.jpg'
import image_1 from '../../images/image_1.jpg'
import image_2 from '../../images/image_2.jpg'
import image_3 from '../../images/image_3.jpg'
import image_4 from '../../images/image_4.jpg'
import image_5 from '../../images/image_5.jpg'
import image_6 from '../../images/image_6.jpg'
import loc from '../../images/loc.png'
import person_1 from '../../images/person_1.jpg'
import person_2 from '../../images/person_2.jpg'
import person_3 from '../../images/person_3.jpg'
import person_4 from '../../images/person_4.jpg'
import './Login.css';

class Login extends Component{

 constructor(props){
   super(props);
   this.state = {
       memberid:"",
       pwd:"",
   }
 }

 render() {
   return (
     <div>
         <h2>login</h2>

         <Form onSubmit={this.login}>
             <Form.Group controlId="memberid">
                 <Form.Label>memberid</Form.Label>
                 <input type="text" name='memberid' onChange={this.ChangeHandler}></input>
             </Form.Group>
             <Form.Group controlId="pwd">
                 <Form.Label>pwd</Form.Label>
                 <input type="text" name='pwd' onChange={this.ChangeHandler}></input>
             </Form.Group>
         </Form>
         <Button variant="success" onClick={this.login}>전 송</Button>
         <Button variant="warning">취 소</Button>

     </div>
   );

 }
 ChangeHandler = e =>{
    const {name,value}=e.target;
    this.setState({
       [name]:value
    })

 }


 login=e=>{
   e.preventDefault()
   const headers = {
       'Content-Type': 'application/json',
       'Authorization' : 'JWT fefege..'
   }

   axios.post('http://localhost:9000/member/selectone',
              JSON.stringify(this.state),
               {headers: headers})
       .then(res=>{
         const result = res.data;
         console.log(result)
         if(result.status==="sucess"){
           localStorage.setItem("loginTf",res.data.dataid);
           alert("로그인성공 라우터이동");
            this.props.history.push("/")
         }else{
          
           alert(result.msg)
         }


       })
       .catch(e=>{
           alert('login에러')
       })
 }

}






export default Login;