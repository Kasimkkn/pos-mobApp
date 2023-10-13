import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import $ from "jquery";
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import { chatbox, notifications } from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Data = () =>{
  return(

    <tr className="ligth ligth-data">
    <td>
        <div className="checkbox d-inline-block">
            <input type="checkbox" className="checkbox-input" id="checkbox1" />
            <label className="mb-0"></label>
        </div>
    </td>
    <td>01 jan 2020</td>
    <td>Bill Yerds</td>
    <td>38.50</td>	
    <td>38.50</td>	
    <td><div className="badge bg-success ">Paid</div></td>	
    <td>Yerds</td>	
    <td>1.3</td>
</tr>
  );
}

const Sales:React.FC = () => {
  useEffect(() => {
        
    $(document).ready(function () {
        $('#SalesTable').DataTable();
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
                                    <h2>Sale List</h2>
                                    <p>Sales enables you to effectively control sales KPIs and monitor them in one central</p>
                                    <p>place while helping teams to reach sales goals.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 my-4">
                        <div className="table-responsive rounded card p-3">
                            <table id="SalesTable" >
                                <thead className=" text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th className="">
                                            <div className="checkbox d-inline-block">
                                                <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                <label className="mb-0"></label>
                                            </div>
                                        </th>
                                        <th>Date</th>
                                        <th>Customer</th>
                                        <th>Total</th>
                                        <th>Paid</th>
                                        <th>Status</th>
                                        <th>Biller</th>
                                        <th>Tax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Data/>
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

export default Sales
