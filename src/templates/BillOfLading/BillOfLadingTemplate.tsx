import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { BillOfLading } from "./types";

const smallText = (text: string): JSX.Element => <div style={{ fontSize: "0.8em" }}>{text}</div>;

const Section3 = (document: BillOfLading): JSX.Element => {
  const carrierName = document.data.CarrierName;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2 h-24">{smallText("Freight & Charges Payable at")}</div>
          <div className="break-words"> SINGAPORE</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Service Contract Number")}</div>
          <div className="break-words">{document.data.ServiceContract || ""}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Rule")}</div>
          <div className="break-words">{document.data.Rule || ""}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Unit")}</div>
          <div className="break-words">{document.data.Unit || ""}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Currency")}</div>
          <div className="break-words">{document.data.Currency || ""}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Prepaid")}</div>
          <div className="break-words">{document.data.PrepaidAmount || ""}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Collect")}</div>
          <div className="break-words">{document.data.CollectAmount || ""}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Total number of containers or packages(in words).")}
                  <div>{document.data.TotalNumberOfContainers || ""}</div>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Place of Issue of B/L")}</div>
                <div className="break-words">{document.data.PlaceOfIssue || ""}</div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Number & Sequence of Original B(s)/L")}
                  THREE/3
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Service Type/Mode")}
                  {document.data.ServiceType || ""}
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Date of Issue of B/L")}</div>
                <div className="break-words">{document.data.DateOfIssue || ""}</div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Declared Value (see clause 7.3)")}</div>
                <div className="break-words">{document.data.DeclaredValue || ""}</div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Shipped on Board Date (Local Time)")}</div>
                <div className="break-words">{document.data.ShippedOnBoardDate || ""}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 border-black border">
          <div className="p-2">
            {document.data.Disclaimer}
            <div className="text-center mt-4 mb-16">
              <strong>
                {document.data.SignedBy || ""}
                {smallText(
                  `As Agent for the carrier and the vessel provider ${document.data.SignedBy ||
                    ""} doing business as ${carrierName || ""}`
                )}
              </strong>
            </div>
            {/* <div className="p-2 h-full flex justify-center items-center">
              <img data-testid="logo" style={{ width: "150px" }} src="/static/images/logo-trames.png" />
            </div> */}
            {/* <hr /> */}
            <div className="text-center mt-2">
              <strong>{smallText("By______________________________")}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = (document: BillOfLading): JSX.Element => {
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>
              Container No. And Seal No. Marks & Nos CONTAINER NO./SEAL NO.{" "}
            </div>
            {document.data.SealNumber}
            {document.data.MarksAndNumbers}
          </div>
        </div>
        <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Quantity And Kind of Packages</div>
            {document.data.TotalNumberOfPackages}
          </div>
        </div>
        <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Description of Goods</div>
            {document.data.DescriptionOfGoods}
            {/* {document.data.MarksAndNumbers?.split("\n").map(number => (
              <div style={{ fontSize: "0.8em" }}>{number}</div>
            ))} */}
            {/* <div style={{ fontSize: "0.8em" }} className="mt-2">
              Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
              clause 14)
            </div> */}
          </div>
        </div>
        {/* <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>NOS OF SEAL </div>
            {document.data.Seals?.split("\n").map(Seal => (
              <div style={{ fontSize: "0.8em" }}>{Seal}</div>
            ))}
          </div>
        </div> */}
        <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Gross Weight(KGS)</div>
            {/* <div style={{ fontSize: "0.8em" }}>{document.data.ContainerTareWeight}</div> */}
            {document.data.CargoGrossWeight?.split("\n").map(weight => (
              <div style={{ fontSize: "0.8em" }}>{weight}</div>
            ))}
          </div>
        </div>
        {/* <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Tare</div>
            <div style={{ fontSize: "0.8em" }}>{document.data.ContainerTareWeight}</div>
          </div>
        </div> */}
        <div className="w-2/6 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Measurement(M3)</div>
            <div style={{ fontSize: "0.8em" }}>{document.data.Measurement}</div>
            {document.data.PackageMeasurement}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section1 = (document: BillOfLading): JSX.Element => {
  // const { shipper = {}, Scac, BLNumber, consignee = {}, notifyParty = {} } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            <img data-testid="logo" style={{ width: "450px" }} src="/static/images/one-logo.png" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="w-2/3 border-black border">
              <div className="p-2">
                <strong>NON-NEGOTIABLE BILL OF LADING</strong>
              </div>
            </div>
            <div className="w-1/3 border-black border">
              <div className="p-2 border-black border-b-2">
                SCAC <strong>{document.data.Scac}</strong>
              </div>
              <div className="p-2">
                B/L No <strong className="break-all">{document.data.BLNumber}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Shipper / Exporter</div>
            <div className="p-4">
              <div>{document.data.Shipper || ""}</div>
              <div>{document.data.ShipperAddress || ""}</div>
              <div>{document.data.ShipperCountry || ""}</div>
              <div>Phone: {document.data.ShipperPhoneNumber || ""}</div>
              <div>{document.data.ShipperEmail || ""}</div>
              <div>{document.data.ShipperFax || ""}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>Document No</div>
            <div>{document.data.TransportDocumentNumber}</div>
          </div>
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>Export references</div>
            <div className="break-words">{document.data.ExportReferenceNumber || ""}</div>
          </div>
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>Forwarding Agent-References</div>
            <div className="break-words">{document.data.ForwardingAgentReferences || ""}</div>
          </div>
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>
              Point and Country of Origin (for the Merchant&apos;s reference only)
            </div>
            <div className="break-words">{document.data.CountryOfOrigin || ""}</div>
          </div>
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>
              Onward Inland Routing/Export Instructions (which are contracted separately by Merchants entirely for their
              own account and risk)
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Consignee (complete name and address)</div>
            <div className="p-4">
              <div>{document.data.Consignee || ""}</div>
              <div>{document.data.ConsigneeAddress || ""}</div>
              <div>{document.data.ConsigneeCountry || ""}</div>
              <div>{document.data.ConsigneePhoneNumber || ""}</div>
              <div>{document.data.ConsigneeEmail || ""}</div>
              <div>{document.data.ConsigneeFax || ""}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Also Notify Party (complete name and address)</div>
            <div className="p-4">
              <div>{document.data.NotifyParty || ""}</div>
              <div>{document.data.NotifyPartyAddress || ""}</div>
              <div>{document.data.NotifyPartyCountry || ""}</div>
              <div>{document.data.NotifyPartyPhoneNumber || ""}</div>
              <div>{document.data.NotifyPartyEmail || ""}</div>
              <div>{document.data.NotifyPartyFax || ""}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Vessel (see clause 1 + 19)</div>
            <div className="break-words">{document.data.Vessel || ""}</div>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Voyage No.</div>
            <div className="break-all">{document.data.VoyageNumber || ""}</div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2" style={{ fontSize: "0.8em" }}>
            Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
          <div className="break-words">{document.data.PlaceOfReceipt || ""}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Port of Loading</div>
            <div className="break-words">{document.data.PortOfLoading || ""}</div>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Port of Discharge</div>
            <div className="break-words">{document.data.PortOfDischarge || ""}</div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Place of Delivery.</div>
            <div className="break-words">{document.data.PlaceOfDelivery || ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BillOfLading>> = ({ document }) => {
  const qrCodeUrl = document?.links?.self.href;
  return (
    <Wrapper data-testid="bill-of-lading-template">
      <div className="mb-8">{Section1(document)}</div>
      <div className="text-center">
        <strong>PARTICULARS FURNISHED BY SHIPPER</strong>
      </div>
      <div className="mb-8">{Section2(document)}</div>
      {Section3(document)}
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
