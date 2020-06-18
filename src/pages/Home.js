import React from 'react'
import '../style/home.css'
import { Jumbotron as Jumbo} from 'react-bootstrap';

export const Home = () => (
    <div class="container-fluid">
        <Jumbo>
            <h1>New Age Shopping</h1>
            <p>There's layers to the problem. It starts off with hurting the world, but connects to inhumane child labour, and companies with weak values who promote appropriation and lack of diversity in body shapes and peoples.</p>
            <p>Empathy is at the core of it, where we feel so much and there's lot of underrepresentation and exploitation and we know there's a way to consume that doesn't have to be as harmful and we wanna create a platform for the empaths who value their opinions and like cute clothes and can shop in a different way that aligns with their values
            </p>
        </Jumbo>
        <div class="row align-items-center">
            <div class="col-sm">
            <a href={"/shopnew"}>
                    <h1>Shop New</h1>
                </a>
               <div className="overlay" id="shopnew">
               </div>
            </div>
            <div class="col-sm">
                <a href={"/shopold"}>
                    <h1>Shop Old</h1>
                </a>
                <div className="overlay" id="shopold"></div>
            </div>
            <div class="col-sm">
                <a href={"/dontshop"}>
                     <h1>Don't Shop</h1>
                </a>
                <div className="overlay" id="dontshop"></div>
             </div>
        </div>
    </div>
)
