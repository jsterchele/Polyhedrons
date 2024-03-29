

    /**
     * Create scene, camera, renderer.
     */
    var setUp = function() {
        var result = {};

        // create a scene, that will hold all our elements such
        // as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        // a frustrum is a pyramid with a square base the apex cut off
        // 45 is vertical field of view of the frustrum
        // window.innerWidth/window.innerHeight is aspect ratio of the frustrum
        // 0.1 is the distance to the near plane of the frustrum
        // 1000 is the distance to the far plane of the frustrum
        var camera = new THREE.PerspectiveCamera(45,
            window.innerWidth / window.innerHeight, 0.1, 1000);

        var orbitControls = new THREE.OrbitControls( camera );
        orbitControls.autoRotate = false;
        var clock = new THREE.Clock();

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();
        // specify the color of the background for this image
        renderer.setClearColor(new THREE.Color(0xDDFFCC));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // specify the lengths of the 3 axes
        var axes = new THREE.AxisHelper(24);
        scene.add(axes);

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 125;
        camera.lookAt(scene.position);

        var origin = new THREE.Object3D();
        origin.position = new THREE.Vector3( 0, 0, 0 );

        result.camera = camera;
        result.clock = clock;
        result.orbitControls = orbitControls;
        result.origin = origin;
        result.renderer = renderer;
        result.scene = scene;

        return result;
    }; // setUp()


    /**
     * Give the program the means to resize the image
     * when a user resizes the window that contains
     * the image.
     *
     * @param {THREE.PerspectiveCamera} camera (could also be a different kind of camera)
     * @param {THREE.WebGLRenderer} renderer (could also be a different kind of renderer)
     */
    var makeResizable = function( camera, renderer ) {
        /**
         * Resize image when user resizes the window.
         */
        var onResize = function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }; // onResize()

        window.addEventListener( 'resize', onResize, false );

    }; // makeResizable()

    /**
     * Add lights to the scene.
     *
     * @param {THREE.Scene} scene is a graph that contains nodes
     * that represent lights, cameras, and geometric objects.
     *
     */
    var addLights = function( scene, origin ) {
        // add spotlights for the shadows
        var directionalLight0 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight0.castShadow = true;
        directionalLight0.target = origin;
        directionalLight0.position.set( 20, 40, 80 );

        directionalLight0.shadeCameraNear = 100;
        directionalLight0.shadeCameraFar = -100;
        directionalLight0.shadeCameraLeft = -100;
        directionalLight0.shadeCameraRight = 100;
        directionalLight0.shadeCameraTop = 100;
        directionalLight0.shadeCameraBottom = -100;

        scene.add(directionalLight0);

        var directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight1.castShadow = true;
        directionalLight1.target = origin;
        directionalLight1.position.set( 20, 80, 40 );

        directionalLight1.shadeCameraNear = 100;
        directionalLight1.shadeCameraFar = -100;
        directionalLight1.shadeCameraLeft = -100;
        directionalLight1.shadeCameraRight = 100;
        directionalLight1.shadeCameraTop = 100;
        directionalLight1.shadeCameraBottom = -100;

        scene.add(directionalLight1);

        var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight2.castShadow = true;
        directionalLight2.target = origin;
        directionalLight2.position.set( 80, 40, 60 );

        directionalLight2.shadeCameraNear = 100;
        directionalLight2.shadeCameraFar = -100;
        directionalLight2.shadeCameraLeft = -100;
        directionalLight2.shadeCameraRight = 100;
        directionalLight2.shadeCameraTop = 100;
        directionalLight2.shadeCameraBottom = -100;

        scene.add(directionalLight2);
    }; // addLights()

    /**
     *  This function will create all of the geometry for a Cuboctahedron
     *  It creates 17 points, adds them to a geometry and returns the geometry
     *  @return geometry a THREE.Geometry object
     **/
     function createGeometry()
     {
        var center = new THREE.Vector3(0, 0, 1.5);
        // front side
        var v1 = new THREE.Vector3( -1, 1, 1.5 );
        var v2 = new THREE.Vector3( -1, -1, 1.5 );
        var v3 = new THREE.Vector3( 1, -1, 1.5 );
        var v4 = new THREE.Vector3( 1, 1, 1.5 );
        // triangle top
        var tt = new THREE.Vector3( 0, 2, 0 );
        // left triangle
        var lt = new THREE.Vector3( -2, 0, 0 );
        // right triangle
        var rt = new THREE.Vector3( 2, 0, 0 );
        // bottom triangle2
        var bt = new THREE.Vector3( 0, -2, 0 );

        // back side
        var bsCenter = new THREE.Vector3(0, 0, -1.5);
        var bs1 = new THREE.Vector3( -1, 1, -1.5 );
        var bs2 = new THREE.Vector3( -1, -1, -1.5 );
        var bs3 = new THREE.Vector3( 1, -1, -1.5 );
        var bs4 = new THREE.Vector3( 1, 1, -1.5 );
        // left triangle
        var bslt = new THREE.Vector3( -2, 0, 0 );
        // right triangle
        var bsrt = new THREE.Vector3( 2, 0, 0 );
        // bottom triangle
        var bsbt = new THREE.Vector3( 0, 2, 0);

        // Side square mid points
        // side top left square
        var stl = new THREE.Vector3( -1, 1, 0 );
        // side bottom left square
        var sbl = new THREE.Vector3( -1, -1, 0 );
        // side bottom right square
        var sbr = new THREE.Vector3( 1, -1, 0 );
        // side top right square
        var str = new THREE.Vector3( 1, 1, 0 );

        var geometry = new THREE.Geometry();

        /** front side **/
        geometry.vertices.push( center );
        geometry.vertices[0].mid = true;
        geometry.vertices.push( v1 );
        geometry.vertices.push( v2 );
        geometry.vertices.push( v3 );
        geometry.vertices.push( v4 );
        // top
        geometry.vertices.push( tt );
        // left
        geometry.vertices.push( lt );
        // bottom
        geometry.vertices.push( bt );
        // right
        geometry.vertices.push( rt );

        /** back side **/
        geometry.vertices.push( bsCenter );
        geometry.vertices[9].mid = true;
        geometry.vertices.push( bs1 );
        geometry.vertices.push( bs2 );
        geometry.vertices.push( bs3 );
        geometry.vertices.push( bs4 );

        /** Side Square mide points **/
        geometry.vertices.push( stl );
        geometry.vertices[14].mid = true;
        geometry.vertices.push( sbl );
        geometry.vertices[15].mid = true;
        geometry.vertices.push( sbr );
        geometry.vertices[16].mid = true;
        geometry.vertices.push( str );
        geometry.vertices[17].mid = true;

        //return
        return geometry;
    }

  /**
   * Adds spheres to the vertexs, and adds them to the scene
   * Does NOT draw any vertices that have a "mid" attribute that is true
   * @param geometry { THREE.Geometry } a THREE.Geometry object.
   * @param scene { THREE.Scene } a THREE.Scene object
   * @param scale a scale factor for the shape
   **/
  function vertexSpheres( geometry, scene, scale )
  {
        var vertSpheres = [];
        var sGeometry = new THREE.SphereGeometry( 1, 32, 32 );
        var sMaterial = new THREE.MeshBasicMaterial( {color: 0x695959} );
        for( var i = 0; i < geometry.vertices.length; i++)
        {
          if( geometry.vertices[i].mid != true)
          {
          var sphere = new THREE.Mesh( sGeometry, sMaterial );
          sphere.position.x = geometry.vertices[i].x * scale;
          sphere.position.y = geometry.vertices[i].y * scale;
          sphere.position.z = geometry.vertices[i].z * scale;
          vertSpheres.push( sphere );
          scene.add( sphere );
          }
        }
  }



/**
 * Draws a cuboctahedron to the scene
 * @param geometry { THREE.Geometry } a THREE.Geometry object
 * @param scene { THREE.Scene } a THREE.Scene object that the shape will be added to
 * @param scale a scale factor for the shape
 **/
function drawCuboctahedron( geometry, scene, scale )
{
    /** Front Side **/
    //front side square
    geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geometry.faces.push( new THREE.Face3( 0, 2, 3 ) );
    geometry.faces.push( new THREE.Face3( 0, 3, 4 ) );
    geometry.faces.push( new THREE.Face3( 0, 4, 1 ) );
    geometry.faces[0].color = new THREE.Color( 0x44EEBB );
    geometry.faces[1].color = new THREE.Color( 0x44EEBB );
    geometry.faces[2].color = new THREE.Color( 0x44EEBB );
    geometry.faces[3].color = new THREE.Color( 0x44EEBB );

    // top triangle
    geometry.faces.push( new THREE.Face3( 1, 4, 5 ) );
    // left triangle
    geometry.faces.push( new THREE.Face3( 1, 2, 6 ) );
    // bottom triangle
    geometry.faces.push( new THREE.Face3( 2, 3, 7 ) );
    // right triangle
    geometry.faces.push( new THREE.Face3( 3, 4, 8 ) );
    geometry.faces[4].color = new THREE.Color( 0xFF1919 );
    geometry.faces[5].color = new THREE.Color( 0xFF1919 );
    geometry.faces[6].color = new THREE.Color( 0xFF1919 );
    geometry.faces[7].color = new THREE.Color( 0xFF1919 );

    /** Back Side **/
    geometry.faces.push( new THREE.Face3( 9, 10, 11 ) );
    geometry.faces.push( new THREE.Face3( 9, 11, 12 ) );
    geometry.faces.push( new THREE.Face3( 9, 12, 13 ) );
    geometry.faces.push( new THREE.Face3( 9, 13, 10 ) );
    geometry.faces[8].color = new THREE.Color( 0x44EEBB );
    geometry.faces[9].color = new THREE.Color( 0x44EEBB );
    geometry.faces[10].color = new THREE.Color( 0x44EEBB );
    geometry.faces[11].color = new THREE.Color( 0x44EEBB );
    // top triangle
    geometry.faces.push( new THREE.Face3( 5, 10, 13 ) );
    // left triangle
    geometry.faces.push( new THREE.Face3( 6, 10, 11 ) );
    // bottom triangle
    geometry.faces.push( new THREE.Face3( 7, 11, 12 ) );
    // right triangle
    geometry.faces.push( new THREE.Face3( 8, 12, 13 ) );
    geometry.faces[12].color = new THREE.Color( 0xFF1919 );
    geometry.faces[13].color = new THREE.Color( 0xFF1919 );
    geometry.faces[14].color = new THREE.Color( 0xFF1919 );
    geometry.faces[15].color = new THREE.Color( 0xFF1919 );

    // Side Squares
    //top left square
    geometry.faces.push( new THREE.Face3( 6, 1, 14 ) );
    geometry.faces.push( new THREE.Face3( 5, 1, 14 ) );
    geometry.faces.push( new THREE.Face3( 6, 10, 14 ) );
    geometry.faces.push( new THREE.Face3( 5, 10, 14 ) );
    geometry.faces[16].color = new THREE.Color( 0x44EEBB );
    geometry.faces[17].color = new THREE.Color( 0x44EEBB );
    geometry.faces[18].color = new THREE.Color( 0x44EEBB );
    geometry.faces[19].color = new THREE.Color( 0x44EEBB );
    //bottom left square
    geometry.faces.push( new THREE.Face3( 6, 2, 15 ) );
    geometry.faces.push( new THREE.Face3( 7, 2, 15 ) );
    geometry.faces.push( new THREE.Face3( 6, 11, 15 ) );
    geometry.faces.push( new THREE.Face3( 7, 11, 15 ) );
    geometry.faces[20].color = new THREE.Color( 0x44EEBB );
    geometry.faces[21].color = new THREE.Color( 0x44EEBB );
    geometry.faces[22].color = new THREE.Color( 0x44EEBB );
    geometry.faces[23].color = new THREE.Color( 0x44EEBB );
    //bottom right square
    geometry.faces.push( new THREE.Face3( 7, 3, 16 ) );
    geometry.faces.push( new THREE.Face3( 8, 3, 16 ) );
    geometry.faces.push( new THREE.Face3( 7, 12, 16 ) );
    geometry.faces.push( new THREE.Face3( 8, 12, 16 ) );
    geometry.faces[24].color = new THREE.Color( 0x44EEBB );
    geometry.faces[25].color = new THREE.Color( 0x44EEBB );
    geometry.faces[26].color = new THREE.Color( 0x44EEBB );
    geometry.faces[27].color = new THREE.Color( 0x44EEBB );
    //top right square
    geometry.faces.push( new THREE.Face3( 8, 4, 17 ) );
    geometry.faces.push( new THREE.Face3( 5, 4, 17 ) );
    geometry.faces.push( new THREE.Face3( 8, 13, 17 ) );
    geometry.faces.push( new THREE.Face3( 5, 13, 17 ) );
    geometry.faces[28].color = new THREE.Color( 0x44EEBB );
    geometry.faces[29].color = new THREE.Color( 0x44EEBB );
    geometry.faces[30].color = new THREE.Color( 0x44EEBB );
    geometry.faces[31].color = new THREE.Color( 0x44EEBB );

    geometry.computeFaceNormals();

    var material = new THREE.MeshBasicMaterial( {vertexColors: THREE.FaceColors,  side: THREE.DoubleSide} );

    var octahedron = new THREE.Mesh( geometry, material );
    octahedron.scale.x = scale;
    octahedron.scale.y = scale;
    octahedron.scale.z = scale;

    scene.add( octahedron );
}


    /**
     * Draw a picture of a cuboctahedron.
     */
    var init = function() {
        var basics = setUp();
        var camera = basics.camera;
        var clock = basics.clock;
        var orbitControls = basics.orbitControls;
        orbitControls.autoRotate = true;
        var origin = basics.origin;
        var renderer = basics.renderer;
        var scene = basics.scene;

        makeResizable( camera, renderer );

        addLights( scene, origin );

        //geometry for the shape
        var geometry = createGeometry();
        //draw the shape
        drawCuboctahedron( geometry, scene, 20 );
        //add spheres to the vertices
        vertexSpheres( geometry, scene, 20 );

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);




        var render = function() {
            var delta = clock.getDelta();
            orbitControls.update(delta);
            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }; // render()

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        render();
    } // init()
