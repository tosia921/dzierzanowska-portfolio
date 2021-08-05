export default {
    type: 'document',
    name: 'about',
    title: 'About',
    i18n: {
      base: 'en_UK',
      languages: ['en_UK', 'pl_PL'],
      messages: {
        loading: 'Loading languages...',
        missing: 'Missing',
        draft: 'Draft',
        publishing: 'Publishing...',
        publish: 'Publish',
        deleteAll: {
          buttonTitle: 'Delete (incl. translations)',
          deleting: 'Deleting...',
        },
        duplicateAll: {
          buttonTitle: 'Duplicate (incl. translations)',
          duplicating: 'Duplicating...',
        },
        translationsMaintenance: {
          title: 'Translation Maintenance',
          selectSchemaPlaceholder: 'Select schema type',
          idStructureMismatch: 'document(s) with mismatched ID structures',
          missingLanguageField: 'document(s) are missing the language field',
          missingDocumentRefs: 'document(s) have missing translation references',
          orphanDocuments: 'orphaned translation document(s)',
          referenceBehaviorMismatch: 'document(s) with mismatched reference behaviors',
          fix: 'Fix'
        }
      },
      fieldNames: {
        lang: '__i18n_lang',
        references: '__i18n_refs'
      }
    },
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'text'   
        }
    ]
}