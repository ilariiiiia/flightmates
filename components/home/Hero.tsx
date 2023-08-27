import Form from "./Form"

const Hero = () => {
    return (
            <div className="grid gap-3">
                <h1 className="self-center text-5xl font-bold">
                    Chat with your flightmates in real time!
                </h1>
                <p className="self-center text-xl font-semibold">
                    Please enter your flight no.:
                </p>
                <Form/>
            </div>
    );
};

export default Hero;
