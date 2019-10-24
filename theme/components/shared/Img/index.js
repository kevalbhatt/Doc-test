/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useConfig } from "../../../../docz-lib/docz/dist";
const Img = props => {
	const { src, width, height } = props;
	const { baseUrl } = useConfig();
	const styles = {
    	boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
		WebkitBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
		MozBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
	 }
	return (
		<div>
			<img
				style={styles}
				src={`${baseUrl}${src}`}
				height={`${height || "auto"}`}
				width={`${width || "100%"}`}
			/>
		</div>
	);
};
export default Img;
