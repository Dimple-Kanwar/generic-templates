import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BillOfLading extends Document {
  scac: string;
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
  carrierName?: string;
  packages?: {
    description: string;
    weight: string;
    measurement: string;
  }[];
  shipper?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignee?: { name?: string };
  notifyParty?: { name?: string };
  links?: {
    self: {
      href: string;
    };
  };

  //new ones
  placeOfReceipt?: string;
  placeOfDelivery?: string;
  placeOfIssue?: string;
  dateOfIssue?: string;
  shippedOnBoardDate?: string;
  declaredValue?: string;
  disclaimer?: string;
  rule?: string;
  unit?: string;
  currency?: string;
  prepaid?: string;
  collect?: string;
  freightCharges?: string;
  exportReferences?: string;
}
