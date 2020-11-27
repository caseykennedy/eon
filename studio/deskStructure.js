import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import { GoFile } from "react-icons/go";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "project",
  "siteSettings"
];

export default () =>
  S.list()
    .title("eOn Website Content")
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),

      // Retailers
      // _________________________________________________________________
      S.listItem()
        .title("Retailers")
        .schemaType("retailer")
        .child(S.documentTypeList("retailer").title("Retailers"))

        .icon(MdSettings),

      // Instagram
      // _________________________________________________________________
      S.listItem()
        .title("Instagram Feed")
        .schemaType("instagram")
        .child(S.documentTypeList("instagram").title("Instagram"))

        .icon(MdSettings),

      // Legal
      // _________________________________________________________________
      S.listItem()
        .title("Legal stuff")
        .child(
          S.editor()
            .id("legal")
            .schemaType("legal")
            .documentId("legal")
        )
        .icon(MdSettings)

      // End
      // _________________________________________________________________
    ]);
