import React,{Component} from 'react';
import axios from 'axios'
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

import './Mypage.css';

class Mypage extends Component {

 constructor(props){
   super(props)
 }

componentDidMount(){
 console.log("라이프사이클 로직실행")
  const headers = {
     'Content-Type': 'application/json',


 }

 // let data = {
 //     amount : this.state.amount,
 //     memberid : this.state.memberid
 // }

 let id ="c";
 axios.get(`http://localhost:9000/member/mypage/${id}`,  {headers:headers})
     .then(res =>{
         //alert('통신성공  url:')
         console.log(res.data)
     })
     .catch(res =>{
         alert('통신 실패')
     })
     console.log("라이프사이클 로직실행끝")

}


 render(){
     return (
     <div>
         <br></br>
         <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row">
            <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="sidebar-wrap">
                  <div className="sidebar-box p-4 about text-center ftco-animate">
                    <h2 className="heading mb-4">About Me</h2>
                    <img src={author} className="img-fluid" alt="Colorlib Template" />
                    <div className="text pt-4">
                      <p>
                        <strong>name : 문호</strong><br/>
                        email : kz1324@naver.com<br/>  
                        gender : 남<br/> 
                        phone : 01055754786<br/>
                        birthday : 931229<br/>
                        tardycash : 0<br/>
                      <button type="button" class="btn btn-outline-warning">충전하기</button>
                      </p>
                    </div>
                  </div>    
                </div>
              </div>
              <div className="col-lg-1"></div>

              <div className="col-lg-5">
              <section className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
         
            <div className="row d-flex">
         
            
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h3 className="mb-4">my Activity</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={10}>0</strong>
                        <span>개설중인 모임</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={200}>0</strong>
                        <span>개설했던 모임</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={300}>0</strong>
                        <span>참여중인 모임</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={40}>0</strong>
                        <span>참여했던 모임</span>
                      </div>
                    </div>
                  </div>
                </div>
  
            </div>
     
         </section>
        </div>




        <div className="col-lg-2"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h3 className="mb-4"><span>my Meeting</span></h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_1} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_2} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_3} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>


              <div className="col-lg-2"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h3 className="mb-4"><span>my Meeting</span></h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_1} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_2} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_3} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>



              <div className="col-lg-2"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h3 className="mb-4"><span>my Meeting</span></h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_1} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_2} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_3} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>



              <div className="col-lg-2"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h3 className="mb-4"><span>my Meeting</span></h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_1} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_2} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      {/* <a href="single.html" className="img-2"><img src={blog_3} className="img-fluid" alt="Colorlib Template" /></a> */}
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h6><button>Tasty &amp; Delicious Foods</button></h6>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>
     </div>
     );
 }


}


export default Mypage;