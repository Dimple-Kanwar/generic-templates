import { BillOfLading } from "./types";

// export const BillOfLadingSample: BillOfLading = {
// $template: {
//   type: "EMBEDDED_RENDERER",
//   name: "BILL_OF_LADING",
//   url: "http://localhost:3000"
// },
// links: {
//   self: {
//     href:
//       "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D"
//   }
// },
//   Scac: "SGPU",
//   BLNumber: "SGCNM21566325",
//   packages: [
//     {
//       description: "description",
//       weight: "10",
//       measurement: "20"
//     }
//   ],
//   shipper: {
//     name: "Shipper Name",
//     address: {
//       street: "101 ORCHARD ROAD",
//       country: "SINGAPORE"
//     }
//   },
//   Vessel: "vessel",
//   VoyageNumber: "voyageNo",
//   consignee: {
//     name: "Consignee name"
//   },
//   notifyParty: {
//     name: "Notify Party Name"
//   },
//   PortOfDischarge: "Paris",
//   PortOfLoading: "Singapore",
//   CarrierName: "A.P. Moller"
// };
export const BillOfLadingSample: BillOfLading = {
  $template: {
    type: "EMBEDDED_RENDERER",
    name: "BILL_OF_LADING",
    url: "http://localhost:3000"
  },
  links: {
    self: {
      href:
        "https://action.openattestation.com?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-rinkeby.tradetrust.io%2Fstorage%2F522f6929-2878-41d6-bd17-adc9170d897d%22%2C%22key%22%3A%22e834419b95a798f44323d2f590097b8566532eac22977219244048f0167d243b%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Frinkeby.tradetrust.io%2F%22%7D%7D"
    }
  },
  data: {
    BLNumber: "ΟΝΕYS IΝA6 8 2",
    CarrierName: "ONED\nOCEAN NETWORK EXPRESS",
    TransportDocumentIssuer: "",
    Shipper: "SCHNEIDER ELECTRIC ASIA PTE LTD",
    ShipperAddress: "46 PENJURU LANE #04 C&P HUB 3\nSINGAPORE 569059",
    ShipperCountry: "REPUBLIC OF SINGAPORE",
    ShipperPhoneNumber: "",
    ShipperEmail: "",
    ShipperFax: "",
    Consignee: "SCHNEIDER",
    ConsigneeAddress: "3",
    ConsigneeCountry: "",
    ConsigneePhoneNumber: "",
    ConsigneeEmail: "",
    ConsigneeFax: "",
    FreightPayer: "",
    NotifyParty: "MAERSK LOGISTICS AND\nAFRICA ΡYT LTD.",
    NotifyPartyAddress: "SOUTH\nTHE MARINE BUILDING 22 DOROTHY\nNYEMBE STREET 7001 DURBAN\nSOUTH",
    NotifyPartyCountry: "",
    NotifyPartyPhoneNumber: "",
    NotifyPartyEmail: "",
    NotifyPartyFax: "",
    AlsoNotify: "",
    ShipperForwardingAgent: "",
    ConsigneeForwardingAgent: "",
    PlaceOfReceipt: "SINGAPORE",
    PortOfLoading: "CollectAmount",
    PortOfDischarge: "DURBAN",
    PlaceOfDelivery: "REPUBLIC",
    OnwardInlandRouting: "",
    ServiceType: "",
    ShipmentTerms: "PREPAID",
    Vessel: "COSCO WELLINGTON",
    VoyageNumber: "071W",
    MarksAndNumbers: "NIL MARKS",
    DescriptionOfGoods: "ELECTRICAL",
    Commodity: "",
    HsCode: "854390",
    CargoGrossWeight: "9620.000KGS",
    VerifiedGrossMass: "",
    TotalContainerWeight: "",
    Measurement: "48.148CBM",
    FreightPayableAt: "SINGAPORE",
    PlaceOfIssue: "SINGAPORE",
    DateOfIssue: "27 OCT 2020",
    NumberOfOriginalBL: "",
    NumberOfBLCopies: "",
    CarrierBookingNumber: "SINA68239300",
    ContainerNumber: "TCNU3943030",
    ContainerSizeType: "FCL / FCL",
    ShipperLEI: "",
    ConsigneeLEI: "",
    NotifyPartyLEI: "",
    SealNumber: "/ SGAC72288",
    SealSource: "",
    Address: "",
    PhoneNumber: "",
    Email: "",
    Fax: "",
    ContainerTareWeight: "",
    TransportDocumentNumber: "",
    ExportReferenceNumber: "1097131",
    CountryOfOrigin: "",
    PreCarriedBy: "",
    OnBoardDate: "27 OCT 2020",
    ReceivedForShipmentDate: "",
    SignedBy: "",
    Scac: "12345",
    FreightAndCharges: "",
    PrepaidOrCollect: "",
    TermsAndConditions: "",
    TotalNumberOfContainers: "",
    TotalNumberOfPackages: "2",
    CarrierClauses:
      "OCEAN FREIGHT PREPAID\nDESTINATION CHARGES COLLECT PER LINE TARIFF AND OTHER CHARGES TO BE COLLECTED FROM\nTHE PARTY WHO LAWFULLY DEMANDS DELIVERY OF THE CARGO WITHOUT PREJUDICE TO THE\nCARRIER'S RIGHTS AGAINST THE MERCHANT (SEE BACK CLAUSE 1) AS SET OUT AT BACK\nCLAUSE 13 (1)\nSHIPPER'S LOAD AND",
    Unit: "Kg",
    Currency: "USD",
    PrepaidAmount: "",
    CollectAmount: "",
    ServiceContract: "LEHB01027A",
    DeclaredValue: "123",
    Disclaimer:
      "RECEIVED by the Carier in apparent good order and condition (unless otherwise stated herein) the total\nnumber or quantity of Containers or other packages or units indicated in the box entitled \"Carrier's Receipt\",\nto be carried subject to all the terms and conditions hereof from the Place of Receipt or Port of Loading to the\nPort of Discharge or Place of Delivery, as applicable. Delivery of the Goods to the Carrier for Carriage\nhereunder constitutes acceptance by the Merchant (as defined hereinafter) (i) of all the terms and conditions,\nwhether printed, stamped or otherwise incorporated on this side and on the reverse side of this Bill of lading\nand the terms and conditions of the Carrier's applicable tariff(s) as if they were all signed by the Merchant,\nand (i) that any prior representations and/or agreements for or in connection with Carriage of the Goods are\nsuperseded by this Bill of Lading. If this is a negotiable (To Order/of) Bill of Lading, one original Bill of Lading,\nduly endorsed must be surrendered by the Merchant to the Carrier (together with any outstanding Freight) in\nexchange for the Goods or a Delivery Order or the pin codes for any applicable Electronic Release System.\nIf this is a non-negotiable (straighf) Bill of Lading, or where issued as a Sea Waybill, the Carrier shall deliver\nthe Goods or issue a Delivery Order or the pin codes for any applicable Electronic Release System (after\npayment of outstanding Freight) to the named consignee against the surrender of one original Bill of Lading,\nor in the case of a Sea Waybill, on production of such reasonable proof of identify as may be required by the\nCarrier, or in accordance with the national law at the Port of Discharge or Place of Delivery as applicable. IN\nWITNESS WHEREOF the Carrier or their Agent has signed the number of Bills of Lading stated at the top,\nall of this tenor and date, and whenever one original Bill of Lading has been surrendered all other Bills of\nLading shall be void.",
    TransportDocumentType: "SEA WAYBILL",
    ReeferTemperatureSetting: "",
    ReeferHumidity: "",
    ReeferVentilation: "",
    PartLoadIndicator: "",
    ForwardingAgentReferenceNumber: "",
    ConsigneeReferenceNumber: "",
    PackageMeasurement: "",
    PackageWeight: ""
  }
};
