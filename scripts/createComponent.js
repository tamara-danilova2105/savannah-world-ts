const { mkdir, writeFile, existsSync } = require('node:fs')
const { join } = require('node:path')
const readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const cssFileName = name => `${name}.module.scss`

const tsxContent = name => `import { memo } from 'react';
import styles from './${cssFileName(name)}';

interface ${name}Props {};

export const ${name} = memo((props: ${name}Props) => {
    const {} = props;

    return (
        <div className={styles.${name.toLowerCase()}}>
        </div>
    );
});
`

const cssContent = name =>
    `.${name.toLowerCase()} {

}`

rl.question('Select component layer: ', path => {
    path = join(__dirname, '..', 'src', path)

    if(!existsSync(path)) {
        throw new Error(`This path not exits [${path}]`)
    }

    rl.question('Enter new component name: ', name => {
        console.log(`Start creating component [${name}] in [${path}]`)
    
        const compPath = join(path, name)
    
        mkdir(compPath,
            err => {
                if (err) {
                    return console.error(err)
                }
                console.log(`Create dir ${name}`)
        })
    
        writeFile(join(compPath, `${name}.tsx`), tsxContent(name), err => {
            if (err) {
                console.error(err)
            } else {
                console.log(`Create ${name}.tsx`)
            }
        })
        
        writeFile(join(compPath, cssFileName(name)), cssContent(name), err => {
            if (err) {
                console.error(err)
            } else {
                console.log(`Create ${cssFileName(name)}`)
            }
        })
    
        console.log('The component was created successfully!')
    
        rl.close()
    })
})