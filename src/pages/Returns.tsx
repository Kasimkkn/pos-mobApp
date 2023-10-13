import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import $ from "jquery";
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import { chatbox, notifications } from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Data = () => {
  return (
    <tr className="ligth ligth-data">
      <td>
        <div className="checkbox d-inline-block">
          <input type="checkbox" className="checkbox-input" id="checkbox1" />
          <label className="mb-0"></label>
        </div>
      </td>
      <td>01 jan 2021</td>
      <td>Return2001</td>
      <td>Test Biller</td>
      <td>Kasim</td>
      <td>35.1</td>
    </tr>
  );
}

const Returns: React.FC = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#ReturnTable').DataTable();
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
                    <h2>Returns List</h2>
                    <p>Returns dashboard shows the graphical representation of the channel and Reference</p>
                    <p>wise returns with the comparison to the total units sold..</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 my-4">
              <div className=" table-responsive rounded card p-3">
                <table id="ReturnTable">
                  <thead className=" text-uppercase">
                    <tr className="ligth-data">
                      <th className="">
                        <div className="checkbox d-inline-block">
                          <input type="checkbox" className="checkbox-input" id="checkbox1" />
                            <label  className="mb-0"></label>
                        </div>
                      </th>
                      <th>Date</th>
                      <th>Refrence no</th>
                      <th>Biller</th>
                      <th>Customer</th>
                      <th>Grand Total</th>
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

export default Returns
