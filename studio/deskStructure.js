import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Contact Us").child(
        S.editor()
          // .id("contact")
          .schemaType("contact")
          .documentId("contact")
      ),
      S.listItem().title("Business Settings").child(
        S.editor()
          // .id("contact")
          .schemaType("business")
          .documentId("business")
      ),
      // // Add a visual divider (optional)
      // S.divider(),
      // // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) => !["contact", "business"].includes(listItem.getId())
      ),

      // ...S.documentTypeListItems(),
    ]);
