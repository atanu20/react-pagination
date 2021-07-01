import React,{useState} from 'react'
import {Data} from './Data';
import ReactPaginate from 'react-paginate';

const Home = () => {
    // const [details, setDetails] = useState(0)
    const [pageNo, setPageNo] = useState(0)

    const perpage=8;
    const pagevisit=pageNo * perpage;
    const data=Data.slice(pagevisit,pagevisit+perpage);
    const boxno=Math.ceil(Data.length / perpage)
    const pageChange=({selected})=>{
        setPageNo(selected)
    }
//    console.log(boxno)
    return (
        <>
    <div className="box">
            <div className="container">
                <div className="row">
                {
                    data.map((value,ind)=>{
                        return (
                            <>
                            <div className="col-lg-3 col-md-3 col-6  mb-3">
                        <div className="card">
                        <div className="sml mb-2" key={ind}>
                                <span>{value.id}</span>
                            </div>
                            <h2>{value.first_name}  {value.last_name}</h2>
                            <h5>{value.email}</h5>
                            <p>{value.gender}</p>

                        </div>
                 </div>


                            </>
                        )
                    })
                }
                   

                </div>
                <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={boxno}
                onPageChange={pageChange}
                containerClassName={"pagination"}
                // previousLinkClassName={"prevbutton"}
                // nextLinkClassName={"nextbutton"}
                // disabledClassName={"pagedisable"}
                activeClassName={"activebutton"}
                
                />
             
                
                    
                    
            </div>
            
            <br /> <br />
        </div>
        
            
        </>
    )
}

export default Home;
