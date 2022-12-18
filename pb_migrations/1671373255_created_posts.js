migrate((db) => {
  const collection = new Collection({
    "id": "rf877o8v1y8apcc",
    "created": "2022-12-18 14:20:55.652Z",
    "updated": "2022-12-18 14:20:55.652Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fn5wubhw",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rf877o8v1y8apcc");

  return dao.deleteCollection(collection);
})
