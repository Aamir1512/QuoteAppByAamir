import Footer from "./Footer";
import Header from "./Header";

export default function MainBody(props) {

    const copyText = () => {
      let text = document.getElementById('text');
    //   text.select();
      navigator.clipboard.writeText(text.innerText);
    }
  
    return (<>
        <div className='outer-main'>
            <Header />
            <hr className="hr"/>
            <div className="main-div">
                <h4 className="quote-heading">Quote</h4>
                <p id="text" className="quote">{props.quote}</p>
                <p className="author"> <span className="author-heading"> Author : </span>{props.author}</p>
                <button className='next-button' onClick={props.next}>
                    Next</button>
                <button className='copy-button' onClick={copyText}>Copy</button>
            </div>
            <hr className="hr"/>
            <Footer />
        </div>
    </>
    )
}