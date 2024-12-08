db.collection.updateMany(
  {}, // Match all documents
  { $set: { status: "unprocessed" } } // Set the status field to "unprocessed"
);
