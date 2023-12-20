import Card from "../components/Card";

export default function Home()
{
    return(
        <>
            <div className="wrapper">
                <div className="text-content ">
                    <div className="head">
                    <h2>Welcome to the Travel Page</h2>
                    </div>
                    <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea praesentium sapiente reprehenderit numquam commodi? Adipisci ipsa esse illum voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, doloribus!</p>
                    <button>More...</button>
                    </div>
                </div>
                <div className="cards"> 
                    <Card/>
                </div>
            </div>
        </>
    )
}