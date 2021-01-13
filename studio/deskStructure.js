import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdStop } from "react-icons/md";
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

      // People
      // _________________________________________________________________

      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title("Post Categories")
        .schemaType("postCategory")
        .child(S.documentTypeList("postCategory").title("Post Category"))

        .icon(MdStop),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Post"))

        .icon(GoFile),

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
