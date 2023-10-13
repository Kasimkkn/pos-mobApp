import { IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar } from '@ionic/react'
import React, { useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import $ from "jquery";
import { chatbox, notifications } from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CustomerData = () => {
    return (
        <tr>
            <td>
                <div className="checkbox d-inline-block">
                    <input type="checkbox" className="checkbox-input" id="checkbox2" />
                    <label className="mb-0"></label>
                </div>
            </td>
            <td>Max Conversion</td>
            <td>max@gmail.com</td>
            <td>0123456789</td>
            <td>USA</td>
            <td>2</td>
            <td>
                <div className="badge bg-danger">Pending</div>
            </td>
            <td>1</td>
        </tr>
    )
}
const UserData = () => {
    return (
        <tr>
            <td>
                <div className="checkbox d-inline-block">
                    <input type="checkbox" className="checkbox-input" id="checkbox2" />
                    <label className="mb-0"></label>
                </div>
            </td>
            <td>Cliff Hanger</td>
            <td>cliff@gmail.com</td>
            <td>Product Manager</td>
            <td>0</td>
            <td>Cliff</td>
            <td>Active</td>
            <td>1</td>
        </tr>
    );
}

const SupplierData = () => {
    return (
        <tr>
            <td>
                <div className="checkbox d-inline-block">
                    <input type="checkbox" className="checkbox-input" id="checkbox2" />
                    <label className="mb-0"></label>
                </div>
            </td>
            <td>Fruits Supply</td>
            <td>Max Conversion</td>
            <td>max@gmail.com</td>
            <td>0123456789</td>
            <td>Petaling</td>
            <td>USA</td>
            <td>1234</td>
        </tr>
    )
}
const Peoples: React.FC = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('#CustomerTable').DataTable();
            $('#UserTable').DataTable();
            $('#SupplierTable').DataTable();
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>
            <IonContent>
                <div className="container-fluid">
                    <div className="row my-4 peoplesTable border-bottom py-3 ">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Customer List</h4>
                                    <p className="mb-0">A customer dashboard lets you easily gather and visualize customer data
                                        from optimizing <br />
                                        the customer experience, ensuring customer retention. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive px-2 py-3 card ">
                                <table id="CustomerTable">
                                    <thead className=" text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone No.</th>
                                            <th>Country</th>
                                            <th>Order</th>
                                            <th>Status</th>
                                            <th>Last Order</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        <CustomerData />
                                        <CustomerData />
                                        <CustomerData />
                                        <CustomerData />
                                        <CustomerData />
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="row my-4 peoplesTable border-bottom py-3 ">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">User List</h4>
                                    <p className="mb-0">A dashboard provides you an overview of user list with access to the
                                        most important data,</p>
                                    <p>functions and controls.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive px-2 py-3 card b">
                                <table id="UserTable">
                                    <thead className=" text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Company</th>
                                            <th>Awors Points</th>
                                            <th>Group</th>
                                            <th>Status</th>
                                            <th>Store</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        <UserData />
                                        <UserData />
                                        <UserData />
                                        <UserData />
                                        <UserData />
                                        <UserData />
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="row my-4 peoplesTable border-bottom py-3 ">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Supplier List</h4>
                                    <p className="mb-0">A customer dashboard lets you easily gather and visualize customer data
                                        from optimizing <br />
                                        the customer experience, ensuring customer retention. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive px-2 py-3 card b">
                                <table id="SupplierTable">
                                    <thead className=" text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Company Name</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone No.</th>
                                            <th>City</th>
                                            <th>Country</th>
                                            <th>GST No</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        <SupplierData/>
                                        <SupplierData/>
                                        <SupplierData/>
                                        <SupplierData/>
                                        <SupplierData/>
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

export default Peoples;
