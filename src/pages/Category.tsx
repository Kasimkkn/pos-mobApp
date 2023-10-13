import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import $ from "jquery";
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import { chatbox, notifications } from 'ionicons/icons';
import img2 from "../img/02.png";
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoryData = () => {
    return (
        <tr className="ligth ligth-data">
            <td>
                <div className="checkbox d-inline-block">
                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                    <label className="mb-0"></label>
                </div>
            </td>
            <td>
                <img src={img2} alt="" style={{ width: "70px", height: "70px" }} />
                Organic Cream</td>
            <td>CREM01</td>
            <td>Beauty</td>
        </tr>
    )
}

const Category: React.FC = () => {
    useEffect(() => {
        
        $(document).ready(function () {
            $('#CategoryTable').DataTable();
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
                                        <h2>Category List</h2>
                                        <p>Use category list as to describe your overall core business from the provided list.</p>
                                        <p>Click the name of the category where you want to add a list item.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 my-4 ">
                            <div className="table-responsive card p-3">
                                <table id="CategoryTable">
                                    <thead className="text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th className="">
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Image</th>
                                            <th>Code</th>
                                            <th>Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CategoryData/>
                                        <CategoryData/>
                                        <CategoryData/>
                                        <CategoryData/>
                                        <CategoryData/>
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

export default Category
