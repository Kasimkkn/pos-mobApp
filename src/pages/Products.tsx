import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import $ from "jquery";
import { chatbox, notifications } from 'ionicons/icons';
import img1 from '../img/02.png';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Data = () => {
    return (
        <tr className="ligth ligth-data">
            <td>
                <div className="checkbox d-inline-block">
                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                </div>
            </td>
            <td>
                <img src={img1} alt="" className="w-25 h-25" />
                Organic Cream
            </td>
            <td>CREM01</td>
            <td>Beauty</td>
            <td>$25.00</td>
            <td>Lakme</td>
            <td>$10.00</td>
            <td>10.0</td>
        </tr>
    );
}

const Products: React.FC = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('#ProductTable').DataTable();
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>
            <IonContent>
                <div className="container-fluid">
                    <div className="row d-flex flex-column gap-3">
                        <div className="col-lg-12">
                            <div className="row mt-4 px-3">
                                <div className="col-lg-8 d-flex align-items-center ">
                                    <div className="">
                                        <h2>Proudcts list</h2>
                                        <p>The product list effectively dictates product presentation and provides space</p>
                                        <p>to list your products and offering in the most appealing way.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 my-3">
                            <div className=" table-responsive card py-3 px-2">
                                <table id="ProductTable" className="">
                                    <thead className=" text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th >
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                </div>
                                            </th>
                                            <th >Product</th>
                                            <th >Code</th>
                                            <th >Category</th>
                                            <th >Price</th>
                                            <th >Brand Name</th>
                                            <th >Cost</th>
                                            <th >Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Data/>
                                        <Data/>
                                        <Data/>
                                        <Data/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
            <IonFooter>
                <Footer/>
            </IonFooter>
        </IonPage>
    )
}

export default Products
