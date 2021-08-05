export default {
    type: 'array',
    name: 'blockContent',
    title: 'Block Content',
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
    of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    }