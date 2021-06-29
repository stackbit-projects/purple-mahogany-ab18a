import React from 'react';

import Layout from '../components/Layout';
import SmallFooter from '../components/SmallFooter';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet the Seeds</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h2 className="major">Current members</h2>
             <div className="box alt">
                    <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>Jenna Riedl</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>Jeremy Yeung</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>Timothy Li</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>Julia Chang</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>Helen Cai</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>Julie Wang</h3></div>
            </div>

            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div>
           
        </div>
        </div>
          <h2 className="major">Alumni</h2>
            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
