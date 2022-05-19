# Env file Generator


#### description

generate a `.env` file through command line with a valid `directory path` of a config file.


#### requirements

 - 'envList.json' json object containing all valid environment variables

    ```
    {
      "NODE_ENV": "development"
    }
    ```

#### usage

  1. create a `envList.json` file and put it in the root directory of this app.
  2. run `npm install -g .` to install this app globally.
  
  3. from the command line: navigate to your current project directory containing your config file and then run the command:
      `generate-env -p ./file/path/to/config.*`