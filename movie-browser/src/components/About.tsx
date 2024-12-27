import Hero from "./Hero";

const AboutView = () => {
    return (
        <>
            <Hero text="About Us" /> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex illo debitis ipsa, dicta, odit accusamus ducimus 
                            incidunt non quam fugit consectetur itaque distinctio at explicabo! Cum sit iusto quisquam recusandae delectus. Impedit commodi, 
                            explicabo dolores dolore optio ut aliquid eveniet, architecto 
                            dolorem fugit earum eligendi recusandae consectetur labore? At, veniam illo. Possimus quasi a optio et pariatur, voluptas similique.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutView;