import moment from "moment/moment";
import Container from "../Container/Container";


const Footer = () => {
    return (
        <div className="bg-black text-white">
            <Container>
                <footer className="footer p-10">
                    <div>
                        <p className="text-3xl font-bold">SportsFitX</p>
                        <p>Providing reliable training since 2020</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <footer className="footer items-center p-4">
                    <div className="items-center grid-flow-col">
                        <p>Sports academy Template by Abu Kawsar </p>
                    </div>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <p>Copyright © {moment().format('YYYY')} - All right reserved</p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;