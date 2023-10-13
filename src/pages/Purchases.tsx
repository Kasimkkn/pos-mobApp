import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import $ from "jquery";
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import { chatbox, notifications } from 'ionicons/icons';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Data = () => {
  return (
    <tr className="ligth ligth-data">
      <td>
        <div className="checkbox d-inline-block">
          <input type="checkbox" className="checkbox-input" id="checkbox1" />
          <label className="mb-0"></label>
        </div>
      </td>
      <td>06 jan 2021</td>
      <td>PO251</td>
      <td>Furniture Supply</td>
      <td>
        <div className="badge bg-success">Received</div>
      </td>
      <td>80.1</td>
      <td>35.1</td>
      <td>45.00</td>
      <td>
        <div className="badge bg-warning">Panding</div>
      </td>
    </tr>
  );
}

const Purchases: React.FC = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#PurchaseTable').DataTable();
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent>
        <div className="container-fluid">
          <div className="row d-flex flex-column gap-3">
            <div className="col-lg-12">
              <div className="row mt-4 px-3">
                <div className="col-lg-8 d-flex align-items-center ">
                  <div className="">
                    <h2>Purchase List</h2>
                    <p>A purchase dashboard enables purchasing manager to efficiently track, evaluate,</p>
                    <p>and optimize all acquisition processes within a company.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 my-4">
              <div className="table-responsive rounded card p-3">
                <table id="PurchaseTable" >
                  <thead className="text-uppercase">
                    <tr className="ligth ligth-data">
                      <th className="">
                        <div className="checkbox d-inline-block">
                          <input type="checkbox" className="checkbox-input" id="checkbox1" />
                          <label className="mb-0"></label>
                        </div>
                      </th>
                      <th>Date</th>
                      <th>Refrence no</th>
                      <th>Supplier</th>
                      <th>Purchase Status</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Balance</th>
                      <th>Payment Status</th>
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
        <Footer />
      </IonFooter>
    </IonPage>
  )
}

export default Purchases
