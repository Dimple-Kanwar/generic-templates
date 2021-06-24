import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BillOfLading extends Document {
  links?: {
    self: {
      href: string;
    };
  };
  data: {
    data: {
      Scac: string;
      BLNumber: string;
      Vessel: string;
      TransportDocumentIssuer: string;
      VoyageNumber: string;
      PortOfLoading: string;
      PortOfDischarge: string;
      CarrierName?: string;
      PackageMeasurement?: string;
      PackageWeight?: string;
      packages?: {
        description: string;
        weight: string;
        measurement: string;
      }[];
      Shipper?: string;
      ShipperAddress?: string;
      ShipperCountry?: string;
      ShipperPhoneNumber?: string;
      ShipperEmail?: string;
      ShipperFax?: string;
      Consignee?: string;
      ConsigneeAddress?: string;
      ConsigneeCountry?: string;
      ConsigneePhoneNumber?: string;
      ConsigneeEmail?: string;
      ConsigneeFax?: string;
      FreightPayer?: string;
      NotifyParty?: string;
      NotifyPartyAddress?: string;
      NotifyPartyCountry?: string;
      NotifyPartyPhoneNumber?: string;
      NotifyPartyEmail?: string;
      NotifyPartyFax?: string;
      AlsoNotify?: string;
      ShipperForwardingAgent?: string;
      ConsigneeForwardingAgent?: string;
      OnwardInlandRouting?: string;
      ServiceType?: string;
      ShipmentTerms?: string;
      MarksAndNumbers?: string;
      DescriptionOfGoods?: string;
      Commodity?: string;
      HsCode?: string;
      CargoGrossWeight?: string;
      VerifiedGrossMass?: string;
      TotalContainerWeight?: string;
      Measurement?: string;
      FreightPayableAt?: string;
      links?: {
        self: {
          href: string;
        };
      };
      NumberOfOriginalBL?: string;
      NumberOfBLCopies?: string;
      CarrierBookingNumber?: string;
      ContainerNumber?: string;
      ContainerSizeType?: string;
      ShipperLEI?: string;
      ConsigneeLEI?: string;
      NotifyPartyLEI?: string;
      SealNumber?: string;
      SealSource?: string;
      Address?: string;
      PhoneNumber?: string;
      Email?: string;
      Fax?: string;
      ContainerTareWeight?: string;
      TransportDocumentNumber?: string;
      CountryOfOrigin?: string;
      PreCarriedBy?: string;
      OnBoardDate?: string;
      ReceivedForShipmentDate?: string;
      SignedBy?: string;
      // Scac?: string;
      // FreightAndCharges: "cff42149-a5a4-467f-886b-b1603bb03cf4:string:",
      PrepaidOrCollect?: string;
      TermsAndConditions?: string;
      TotalNumberOfContainers?: string;
      TotalNumberOfPackages?: string;
      CarrierClauses?: string;
      Unit?: string;
      Currency?: string;
      PrepaidAmount?: string;
      CollectAmount?: string;
      ServiceContract?: string;
      DeclaredValue?: string;
      Disclaimer?: string;
      TransportDocumentType?: string;
      ReeferTemperatureSetting?: string;
      ReeferHumidity?: string;
      ReeferVentilation?: string;
      PartLoadIndicator?: string;
      ForwardingAgentReferenceNumber?: string;
      ConsigneeReferenceNumber?: string;
      PlaceOfReceipt?: string;
      PlaceOfDelivery?: string;
      PlaceOfIssue?: string;
      DateOfIssue?: string;
      ShippedOnBoardDate?: string;
      Rule?: string;
      FreightAndCharges?: string;
      ExportReferenceNumber?: string;
    };
  };
}
