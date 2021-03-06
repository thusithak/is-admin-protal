/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from "material-ui/Grid";
import {withStyles} from "material-ui/styles";

const styles = theme => ({
    footer: {
        textAlign: "center",
        marginTop: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        position:"relative",
        bottom:0,
    },
});

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AppDrawer: false,
        }
    }

    render(){
        const {classes} = this.props;

        return(
            <Grid container spacing={0} alignItems="center" direction="row" justify="center">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={classes.footer}>
                        <Typography type="body1">
                            WSO2 IS v6.0.0 | © 2018
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);